<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="auth-user" content="{{ Auth::user() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="./css/app.css" rel="stylesheet">
</head>
<body class="red">
        <nav class="red darken-4">
            <div class="nav-wrapper">
              <a href="{{ url('/') }}" class="brand-logo">{{ config('app.name', 'Laravel') }}</a>
              <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ url('/login') }}">Login</a></li>
                    <li><a href="{{ url('/register') }}">Register</a></li>
                @else
                    <li><a href="{{ url('/home') }}">{{ Auth::user()->name }}'s Tavern</a></li> 
                    <li>
                        <a href="{{ url('logout') }}"
                            onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();">
                            Logout
                        </a>

                        <form id="logout-form" action="{{ url('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </li>  
                @endif
              </ul>
              <ul class="side-nav" id="nav-mobile">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ url('login') }}">Login</a></li>
                    <li><a href="{{ url('register') }}">Register</a></li>
                @else
                    <li><a href="{{ url('/home') }}">{{ Auth::user()->name }}'s Tavern</a></li> 
                    <li class="divider"></li>
                    <li>
                        <a href="{{ url('logout') }}"
                            onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();">
                            Logout
                        </a>

                        <form id="logout-form" action="{{ url('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </li>
                @endif
              </ul>
            </div>
        </nav>
    <div id="app">


        @yield('content')
    </div>

    <!-- Scripts -->
    <!-- Enable Marker Clustering -->
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
    <!-- Enable Google Maps -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD28LoewQ7rLMESfl6K0_y9ZyVkf0Rq8L0">
    </script>
    <!-- JQuery -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"></script>
    <!-- Materialize -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
    <script>
        // Initialize Materialze Components
    $(".button-collapse").sideNav(); //side navs

    $(".dropdown-button").dropdown(); //dropdowns
    </script>
    <script src="./js/app.js"></script>
</body>
</html>
