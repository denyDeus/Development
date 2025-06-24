from django.urls import path
from . import views  # or from LearningWeb import views if needed

urlpatterns = [
    path('<int:id>', views.index, name='index'),
    path("home/", views.home, name = "home"),
    path("create/", views.create, name = "create"),
    path("view/", views.view, name="view") # example route
]
