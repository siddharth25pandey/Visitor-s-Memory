# Visitor's Memory
## Web Application in which User can share their experience About the place they visited
### A compelete End to end React + Django Basic Web Page

### This Project is basically explains about the Linking & Connection of React Library with Django Framework
* React is commonly used for creating SPA (Front End Part)
* Django is commonly  used for creating full fledge (Back End Part)

## Glimpse of this Project
![home](https://github.com/siddharth25pandey/Visitor-s-Memory/blob/main/home.PNG)

## Prerequisites:
* Python3, NPM Installed
* Nodejs installed (Version 12+)

## Steps to run the Project

* Create Virtual Enviornment and run the following command

```pip install django
pip install djangorestframework
python -m pip install django-cors-headers
```

### Steps to connect React in Django 
* Go to Settings.py
* Add rest_framework ,app_name, corsheaders  to INSTALLED APPS like this
```'rest_framework',
    'diary',
    'corsheaders']
 ```
* Add Add corsheaders.middleware.CorsMiddleware to MIDDLEWARE list like this
```'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',]
```
* Create a Dictionary of REST_FRAMEWORK like this
```
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.AllowAny']
}
```

* Now migrate the created models using 
```python manage.py makemigrations 
python manage.py migrate
python manage.py runserver 1000
```

* You can view the Backend Part (DjangoRest Framework) on Port Number
```http://localhost:1000/
http://localhost:1000/visitor_page/
```


## Axios is the main tool for connecting back-end with front-end. All the requests will be sent to the server (back-end) with the help of Axios.

*   Now we have to fetch data from the server by using Axios. The **componentDidMount** method is called when the component is rendered. This is the right time to request a server for the data. We have used Axios in this method to store the data in a state obtained from the server and later on rendered by the help of a map in JavaScript. 

* Now Run the Project by `npm start` and You can view it on Port number **3000** or Url below
```http://localhost:3000/
http://localhost:3000/visitor_page
```
