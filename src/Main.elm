module Main exposing (main)

import Browser
import Html exposing (Html, div, text)


type alias Model =
    { message : String
    , luckyNum : Int
    }


init : Model
init =
    { message = ""
    , luckyNum = 68
    }


view : Model -> Html msg
view _ =
    div []
        [ text "Written in Elm by taiprogramer."
        ]


update : msg -> Model -> Model
update _ _ =
    { message = ""
    , luckyNum = 68
    }


main : Program () Model msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }
