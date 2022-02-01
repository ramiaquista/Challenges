def score_test(tests, right, omit, wrong)
  # Solution 1
  (tests.count(0) * right) + (tests.count(1) * omit) - (tests.count(2) * wrong)
  # Solution 2
  counter = 0
  tests.each do |number|
    if number === 0
      counter += right 
    elsif number === 1
      counter += omit 
    else
      counter -= wrong
    end
  end
  counter
end
