from django.urls import path
from . import views

urlpatterns = [
    path("getRoutes/", views.getRoutes, name="routes"),
    path("notes/", views.getAllNotes, name="notes"),
    path("notes/<str:pk>/", views.getNote, name="note")

]
