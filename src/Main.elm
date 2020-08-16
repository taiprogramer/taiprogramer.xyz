module Main exposing (main)

import Browser
import Html exposing (Html, a, div, h1, p, text)
import Html.Attributes exposing (href, style, target)


type alias Model =
    Int


init : Model
init =
    0


view : Model -> Html msg
view _ =
    div
        []
        [ div
            [ style "color" "#FFFFFF"
            , style "background-color" "#6FB0FF"
            , style "font-size" "36px"
            , style "padding" "35px"
            ]
            [ text "taiprogramer.xyz" ]
        , div
            [ style "text-align" "center"
            , style "background-color" "#4A4848"
            , style "height" "100%"
            , style "padding" "35px"
            ]
            [ h1
                [ style "color" "#D1D1D1"
                , style "margin" "0px"
                ]
                [ text "About" ]
            , p
                [ style "color" "#B9B9B9"
                , style "font-size" "21px"
                , style "margin" "0px"
                , style "padding" "35px 0px"
                ]
                [ text "Hi guys! My full name is Huynh Van Tai. I am a student at Can Tho University. I am just a programmer. I like solving problem, coding, meeting more people and learning more things everyday." ]
            , a
                [ style "font-size" "21px"
                , style "text-decoration" "none"
                , style "color" "#69A2FD"
                , href "mailto: taiprogramer@protonmail.com"
                ]
                [ text "taiprogramer@protonmail.com" ]
            , p [] []
            , a
                [ href "https://t.me/taiprogramer"
                , target "_blank"
                , style "text-decoration" "none"
                , style "font-size" "21px"
                , style "color" "#69A2FD"
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
