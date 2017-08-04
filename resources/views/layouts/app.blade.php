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
<body>
        <nav>
            <div class="nav-wrapper">
              <a href="{{ secure_url('/') }}" class="brand-logo center">{{ config('app.name', 'Laravel') }}</a>
              <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ secure_url('/login') }}">Login</a></li>
                    <li><a href="{{ secure_url('/register') }}">Register</a></li>
                @else
                    <li>{{ Auth::user()->name }}</li> 
                    <li>
                        <a href="{{ secure_url('logout') }}"
                            onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();">
                            Logout
                        </a>

                        <form id="logout-form" action="{{ secure_url('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </li>  
                @endif
              </ul>
              <ul class="side-nav" id="nav-mobile">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ secure_url('login') }}">Login</a></li>
                    <li><a href="{{ secure_url('register') }}">Register</a></li>
                @else
                    <li>{{ Auth::user()->name }}</li>
                    <li class="divider"></li>
                    <li>
                        <a href="{{ secure_url('logout') }}"
                            onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();">
                            Logout
                        </a>

                        <form id="logout-form" action="{{ secure_url('logout') }}" method="POST" style="display: none;">
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
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhWgHy0QFctBl4j-SJlMDMEOy0wr--HE4">
    </script>
    <!-- JQuery -->
    <script
      src="http://code.jquery.com/jquery-3.2.1.min.js"
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
