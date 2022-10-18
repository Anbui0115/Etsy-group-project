from  wtforms import Field, ValidationError

# https://code.luasoftware.com/tutorials/flask/flask-wtforms-accept-json-array/
class ListField(Field):
    def process_formdata(self, valuelist):
        self.data = valuelist

# https://wtforms.readthedocs.io/en/2.3.x/validators/
class ListFieldLengthValidator(object):
    def __init__(self, min=-1, max=-1, message=None):
        self.min = min
        self.max = max
        if not message:
            message = u'Field must have between %i and %i elements.' % (min, max)
        self.message = message

    def __call__(self, form, field):
        l = field.data and len(field.data) or 0
        if l < self.min or self.max != -1 and l > self.max:
            raise ValidationError(self.message)
