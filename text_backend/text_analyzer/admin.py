from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import ComparisonData, TextObjectData


class ComparisonDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'label', 'source', 'text1', 'text2')


class TextObjectDataAdmin(admin.ModelAdmin):
    list_display = fields = ('id', 'label', 'author', 'text', 'source')


admin.site.register(TextObjectData, TextObjectDataAdmin)
admin.site.register(ComparisonData, ComparisonDataAdmin)
