<%- include(' ')%>
// use the include function with with path to it
// include this to any page

<%- include('partials/head')%>

<%- include('partials/navbar')%>

<%- include('partials/footer')%>



//partial/header.ejs
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Site</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
</head>

<body>


//partial/navbar.ejs
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Express Demo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/rand">Random</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/r/chickens">Chickens</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/r/soccer">Soccer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/r/mightyharvest">Mighty Harvest</a>
            </li>
        </ul>
    </div>
</nav>


//partial/footer.ejs
<footer>
    <p>This is the footer</p>
</footer>
</body>

</html>

  
