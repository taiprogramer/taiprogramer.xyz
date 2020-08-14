module Main exposing (main)

import Browser
import Html exposing (Html, div, text)


type alias Model =
    Int


init : Model
init =
    0


view : Model -> Html msg
view _ =
    div []
        [ text "Written in Elm by taiprogramer."
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
