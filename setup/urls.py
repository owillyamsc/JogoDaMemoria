from django.contrib import admin
from django.contrib.auth import views as auth_views
from jogoDaMemoria.views import index, rankings, save
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('rankings.html', rankings, name='rankings'),
    path('save', save, name='save'),
    path('accounts/login/', auth_views.LoginView.as_view(), name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),
]
