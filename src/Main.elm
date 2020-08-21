module Main exposing (main)

import Bootstrap.CDN as CDN
import Bootstrap.Grid as Grid
import Browser
import Html exposing (Html, a, h1, p, text)
import Html.Attributes exposing (href, target)


type alias Model =
    Int


init : Model
init =
    0


view : Model -> Html msg
view _ =
    Grid.containerFluid
        []
        [ CDN.stylesheet
        , Html.nav
            []
            [ text "taiprogramer.xyz" ]
        , Html.main_
            []
            [ h1
                []
                [ text "About" ]
            , p
                []
                [ text "Hi guys! My full name is Huynh Van Tai. I am a student at Can Tho University. I am just a programmer. I like solving problem, coding, meeting more people and learning more things everyday." ]
            , a
                [ href "mailto: taiprogramer@protonmail.com" ]
                [ text "taiprogramer@protonmail.com" ]
            , p [] []
            , a
                [ href "https://t.me/taiprogramer"
                , target "_blank"
                ]
                [ text "t.me/taiprogramer" ]
            ]
        ]


update : msg -> Model -> Model
update _ _ =
    0


main : Program () Model msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }
