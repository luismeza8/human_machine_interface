# Generated by Django 5.0.7 on 2024-07-10 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Medition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('altitude', models.IntegerField(max_length=6)),
                ('temperature', models.IntegerField(max_length=6)),
                ('battery', models.IntegerField(max_length=6)),
            ],
        ),
    ]
