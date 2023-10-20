package main

import (
	"encoding/gob"
	"os"

	"github.com/CC-MNNIT/CodeSangam/server/docs"
	"github.com/CC-MNNIT/CodeSangam/server/initialize"
	"github.com/CC-MNNIT/CodeSangam/server/routers"
	"github.com/CC-MNNIT/CodeSangam/server/utils"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	echoSwagger "github.com/swaggo/echo-swagger"
)

func init() {
	initialize.LoadEnv()
	initialize.ConnectDB()
	initialize.SetupOAuthClient()

	gob.Register(utils.Key(""))
}

// @title CodeSangam API
// @description This is the API for CodeSangam
// @version 1
//
// @securityDefinitions.oauth2	OAuth2
// @authorizationUrl /api/auth/login
// @tokenUrl /api/auth/callback
// @scope openid


func main() {
	baseUrl := os.Getenv("BASE_URL") + "/api"
	router := echo.New()
	router.Use(session.Middleware(sessions.NewCookieStore([]byte(os.Getenv("SESSION_SECRET")))))
	router.Static(os.Getenv("BASE_URL")+"/static", "web/static")
	initialize.InitTemplateRenderer(router)

	docs.SwaggerInfo.BasePath = baseUrl

	router.GET(baseUrl+"/swagger/*", echoSwagger.WrapHandler)

	baserouter := router.Group(baseUrl)
	routers.AuthRouter(baserouter)
	baserouter = baserouter.Group("/v1")
	
	MergeRouters(baserouter, routers.Index, routers.ContriHub, routers.CodeSangam)

	router.Logger.Fatal(router.Start(":" + os.Getenv("PORT")))
}

func MergeRouters(baserouter *echo.Group, routers ...func(*echo.Group)) {
	for _, router := range routers {
		router(baserouter)
	}
}
