//phone number
\d{3}-\d{2}-\d{4}

^(?P<name>[-\w ]+, \s[-\w ]+)\t      //last and first name
(?P<email>[-\w\d.+]+@[-\w\d.]+)\t    //email
(?P<phone>\(?\d{3}\)?-?\s?\d{3}-\d{4}?\t  //phone
(?P<job>[\w\s]+,\s[\w\s.]+)\t?      //job and company
(?P<twitter>@[\w\d]+)?$      //twitter
