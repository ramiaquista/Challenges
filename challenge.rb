def bmi(weight, height)
  bmi = (weight / (height**2))
  print bmi
  case bmi
    when 0..18.5
      return 'Underweight'
    when 18.5..25.0
      return 'Normal'
    when 25.0..30.0
      return 'Overweight'
    else
      return 'Obese'
   end
end
