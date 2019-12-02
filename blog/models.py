from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator

class Category(models.Model):
	CATEGORIES = (
        ('CAM','Camiseta'),
		('LIC', 'Licra'),
		('ALG', 'Algodon')
    )

	
class Post(models.Model):
	title = models.CharField(max_length=200)
	category = models.CharField(max_length=3, choices=Category.CATEGORIES)
	price = models.IntegerField(null=True, blank=False, validators=[MinValueValidator(1),MaxValueValidator(999999)])
	image = models.ImageField(null=True, blank=False)

	def publish(self):
		self.published_date = timezone.now()
		self.save()

	def __str__(self):
		return self.title	





# class Category(models.Model):
# 	title = models.CharField(max_length=3, verbose_name="Category Title")
# 	CATEGORIES = (
#         ('CAM','Camiseta'),
# 		('LIC', 'Licra'),
# 		('ALG', 'Algodon')
#     )
# 	def __str__(self):
# 		return self.title
	
# class Post(models.Model):
# 	title = models.CharField(max_length=200)
# 	category = models.ForeignKey(Category, verbose_name="Category", choices=Category.CATEGORIES, on_delete=models.DO_NOTHING)
# 	price = models.IntegerField(null=True, blank=False, validators=[MinValueValidator(1),MaxValueValidator(999999)])
# 	image = models.ImageField(null=True, blank=False)

# 	def publish(self):
# 		self.published_date = timezone.now()
# 		self.save()

# 	def __str__(self):
# 		return self.title	

