var myapp = angular.module('angularAuthentication', ['ionic', 'ngResource', 'ngCordova', 'ngStorage']);



myapp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('/', {
            url: '/',
            cache: false,
            controller: 'LoginCtrl',
            templateUrl: 'html/login.html',
        })
        .state('/signUp', {
            url: '/signUp',
            cache: false,
            controller: 'signUpController',
            templateUrl: 'html/signUp.html'
        })
        .state('/loginSubmit', {
            url: '/loginSubmit',
            cache: false,
            controller: 'homeCtrl',
            templateUrl: 'html/home.html'
        })
        /*Test page routing*/
        .state('/test', {
            url: '/test',
            cache: false,
            controller: 'testCtrl',
            templateUrl: 'html/test1.html'
        })
        .state('/test2', {
            url: '/test2',
            cache: false,
            controller: 'testCtrl',
            templateUrl: 'html/test2.html'
        })
        .state('/test3', {
            url: '/test3',
            cache: false,
            controller: 'testCtrl',
            templateUrl: 'html/test3.html'
        })
        .state('/test4', {
            url: '/test4',
            cache: false,
            controller: 'testCtrl',
            templateUrl: 'html/test4.html'
        })
        .state('/test5', {
            url: '/test5',
            cache: false,
            controller: 'testCtrl',
            templateUrl: 'html/test5.html'
        })
        .state('/testresult', {
            url: '/testresult',
            cache: false,
            controller: 'testCtrl',
            templateUrl: 'html/testresult.html'
        })
        .state('/logout', {
            redirectTo: '/'
        })
})

myapp.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location,translationService) {

    $scope.detail = {
        'id': 'english',
        'pagename': 'welcome to login page',
        'emaillabel': 'Email Id',
        'passlabel': 'Password',
        'login': 'Login',
        'signup': 'SignUp'
    };
    $scope.userId = {};
    $scope.login = function () {
        $location.path('/loginSubmit');
        console.log("Redirected Login page");
    };
    $scope.signup = function () {
        $location.path('/signUp');
        console.log("Redirected Sign Up page");
    };
    console.log("Login Controller called");

}])


myapp.controller('signUpController', ['$scope', '$localStorage', '$location','translationService', function ($scope, $localStorage, $location,translationService) {
    console.log("signUp controller44444444444444444");
    $scope.translate = function () {
            translationService.getTranslation($scope, $scope.selectedLanguage);
        };

        //Init
        $scope.selectedLanguage = "english";
        $scope.translate();
    $scope.pagename = 'welcome to signUp page';
    /*$scope.data = {};
    var records = $scope.data;
    console.log("records", records);*/
    $scope.save = function () {
        alert("Server is not working..!!");
        /*       $localStorage.records = records;
               $scope.records = records;
               $http({
                   url: 'http://192.168.1.114:8090/Jsery1.9/user/signup',
                   method: "POST",
                   data: $scope.records,
                   headers: {
                       'Content-Type': 'application/json'
                   }
               }).success(function (data) {

                   if (result !== undefined && result === "success")
                   if (data == "signup success") {
                       localStorage.setItem("appUser", data);
                       //  localStorage.setItem("userName", data.userName);
                       console.log("login successfully");
                       console.log(data);
                       $location.path('/logout');
                   } else {
                       console.log(data);
                   }
               });*/

    };

}])

myapp.controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {

    document.getElementById('myVideo').addEventListener('ended', myHandler, false);

    function myHandler(e) {
        if (!e) {
            e = window.event;
        }
        $('#test').prop('disabled', false);
        console.log("Video Finished.. Start Test button is enabled");

    }

    $scope.pagename = 'welcome to Home page';
    console.log("Redirected Home Page");

    $scope.logout = function () {
        $location.path('/logout');
        console.log("logout Sucessfully");
    };

    $scope.test = function () {
        $location.path('/test');
        console.log("Page 1 redirected");
    };
    console.log("Home ctrl called");
}])

myapp.controller('testCtrl', ['$scope', '$location', '$localStorage', function ($scope, $location, $localStorage) {

    $scope.testa = function () {
        var answer = $scope.result1;
        localStorage.setItem("answer1", answer);
        $location.path('/test2');

    };
    $scope.testb = function () {
        var answer = $scope.result2;
        localStorage.setItem("answer2", answer);
        $location.path('/test3');
    };
    $scope.testc = function () {
        var answer = $scope.result3;
        localStorage.setItem("answer3", answer);
        $location.path('/test4');
    };
    $scope.testd = function () {
        var answer = $scope.result4;
        localStorage.setItem("answer4", answer);
        $location.path('/test5');
    };
    $scope.teste = function () {
        var answer = $scope.result5;
        localStorage.setItem("answer5", answer);
        $location.path('/testresult');
    };

}])
myapp.service('translationService', function () {
    
     var lang = {
        "english": [{
                'name': 'First Name English',
                'type': 'text',
                'modelname': 'firstName',
                'placeholder': 'First name',
                "HELLO_WORLD": " Hello English!"
                    },
            {
                'name': 'Last name English',
                'type': 'text',
                'modelname': 'lastName',
                'placeholder': 'Last name'
                    },
            {
                'name': 'Email Id',
                'type': 'email',
                'modelname': 'email',
                'placeholder': 'EmailId'
                    },

            {
                'name': 'Password',
                'type': 'password',
                'modelname': 'password',
                'placeholder': 'password'
                    },
            {
                'name': 'Phone No.',
                'type': 'number',
                'modelname': 'phoneNumber',
                'placeholder': 'phone no.'
                    },
            {
                'name': 'City',
                'type': 'text',
                'modelname': 'city',
                'placeholder': 'city'
                    },
            {
                'name': 'State',
                'type': 'text',
                'modelname': 'state',
                'placeholder': 'State'
                    }],
        "Spanish": [{
                'name': 'First Name Spanish',
                'type': 'text',
                'modelname': 'firstName',
                'placeholder': 'First name',
             "HELLO_WORLD": " Hello Spenish!"
                    },
            {
                'name': 'Last name Spanish',
                'type': 'text',
                'modelname': 'lastName',
                'placeholder': 'Last name'
                    },
            {
                'name': 'Email Id',
                'type': 'email',
                'modelname': 'email',
                'placeholder': 'EmailId'
                    },

            {
                'name': 'Password',
                'type': 'password',
                'modelname': 'password',
                'placeholder': 'password'
                    },
            {
                'name': 'Phone No.',
                'type': 'number',
                'modelname': 'phoneNumber',
                'placeholder': 'phone no.'
                    },
            {
                'name': 'City',
                'type': 'text',
                'modelname': 'city',
                'placeholder': 'city'
                    },
                {
                'name': 'State',
                'type': 'text',
                'modelname': 'state',
                'placeholder': 'State'
                    }],
        "French": [{
                'name': 'First Name French',
                'type': 'text',
                'modelname': 'firstName',
                'placeholder': 'First name',
             "HELLO_WORLD": " Hello Spenish!"
                    },
            {
                'name': 'Last name French',
                'type': 'text',
                'modelname': 'lastName',
                'placeholder': 'Last name'
                    },
            {
                'name': 'Email Id',
                'type': 'email',
                'modelname': 'email',
                'placeholder': 'EmailId'
                    },

            {
                'name': 'Password',
                'type': 'password',
                'modelname': 'password',
                'placeholder': 'password'
                    },
            {
                'name': 'Phone No.',
                'type': 'number',
                'modelname': 'phoneNumber',
                'placeholder': 'phone no.'
                    },
            {
                'name': 'City',
                'type': 'text',
                'modelname': 'city',
                'placeholder': 'city'
                    },
            {
                'name': 'State',
                'type': 'text',
                'modelname': 'state',
                'placeholder': 'State'
                    }],
        "mandarin": [{
                'name': 'First Name mandarin',
                'type': 'text',
                'modelname': 'firstName',
                'placeholder': 'First name',
             "HELLO_WORLD": " Hello Spenish!"
                    },
            {
                'name': 'Last name mandarin',
                'type': 'text',
                'modelname': 'lastName',
                'placeholder': 'Last name'
                    },
            {
                'name': 'Email Id',
                'type': 'email',
                'modelname': 'email',
                'placeholder': 'EmailId'
                    },

            {
                'name': 'Password',
                'type': 'password',
                'modelname': 'password',
                'placeholder': 'password'
                    },
            {
                'name': 'Phone No.',
                'type': 'number',
                'modelname': 'phoneNumber',
                'placeholder': 'phone no.'
                    },
            {
                'name': 'City',
                'type': 'text',
                'modelname': 'city',
                'placeholder': 'city'
                    },
            {
                'name': 'State',
                'type': 'text',
                'modelname': 'state',
                'placeholder': 'State'
                    }],
         "Hindi": [{
                'name': 'प्रथम नाम',
                'type': 'text',
                'modelname': 'firstName',
                'placeholder': 'प्रथम नाम',
              "HELLO_WORLD": " Hello Spenish!"
                    },
            {
                'name': 'पिछला नाम',
                'type': 'text',
                'modelname': 'lastName',
                'placeholder': 'पिछला नाम'
                    },
            {
                'name': 'ईमेल आईडी',
                'type': 'email',
                'modelname': 'email',
                'placeholder': 'ईमेल आईडी'
                    },

            {
                'name': 'पासवर्ड',
                'type': 'password',
                'modelname': 'password',
                'placeholder': 'पासवर्ड'
                    },
            {
                'name': 'फोन नंबर',
                'type': 'number',
                'modelname': 'phoneNumber',
                'placeholder': 'फोन नंबर'
                    },
            {
                'name': 'शहर',
                'type': 'text',
                'modelname': 'city',
                'placeholder': 'शहर'
                    },
            {
                'name': 'राज्य',
                'type': 'text',
                'modelname': 'state',
                'placeholder': 'राज्य'
                    }]
    };
    
    this.getTranslation = function ($scope, language) {
        var selected_lang = language;
        console.log(selected_lang);
        console.log(selected_lang);
        console.log(lang[selected_lang]);
        var result = lang[selected_lang];
        $scope.fields= result;

    };
      
});