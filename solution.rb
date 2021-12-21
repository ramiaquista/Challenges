def final_grade(exam, projects)
  if exam > 90 || projects > 10
    100
  elsif exam > 75 && projects >= 5
    90
  elsif exam > 50 && projects >= 2
    75
  else
    0
  end
end
