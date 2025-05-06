# Assignment_3

## Part 1: Test and modify the Miles Per Gallon application

In this exercise, you’ll test the **Miles Per Gallon** application and then modify the **JavaScript** so it accepts and displays decimal values.  
When you’re done, the browser window should look similar to the given HTML, but it should work with decimal values:

**Test the application**

1. Opening `part1/index.html` file in a browser. Then, enter decimal values for the miles and gallons, and note that these values are converted to integers.  
2. Run the application again by reloading the file in the browser. Then, enter invalid values like zeros or spaces, and note the result.

**Modify the application**

3. Modify the **JavaScript** so it accepts and displays decimal values for the miles and gallons. Then, reload the file in the browser to run the application again, enter decimal values with two or more decimal places, and note the result.  
4. Modify the **JavaScript** so all of the values are rounded to two decimal places. Then, run the application one more time and note the result.  
5. If you have any problems when you test your exercises, please use Chrome’s developer tools to check.

**Save all necessary files in `part1` folder. Don’t forget that you need `index.html` in this folder too**

## Part 2: Create a simple application

Copying and modifying an existing application is often a good way to start a new application. So in this exercise, you’ll modify the **Miles Per Gallon** application (previous assignment) so it gets the length and width of a rectangle from the user, calculates the area and the perimeter of the rectangle, and displays the results in the browser like Figure 1.  
![image](https://github.com/user-attachments/assets/ea92efef-6270-48eb-92cb-3893c8f35746)
Note: Make sure to attach some style to the webpage too. You can design the style freely.

**Save all necessary files in `part2` folder. Don’t forget that you need `index.html` in this folder too.**

## Part 3: Enhance the Future Value application (ex6-3.zip)

This part needs you to study the files in `part3` folder. 
![image](https://github.com/user-attachments/assets/d1adc04d-b350-405a-a0ec-ac4005b02413)

  Figure 2 presents a **Future Value** application that shows how a `for` loop can be used to calculate the future value of an `investment` amount. This application starts by using `prompt` statements to get the investment amount, interest rate, and number of years from the user. Note, however, that these `prompt` statements are coded within `do-while` loops that are executed until the user enters a numeric value.  

Next, a `for` loop uses these entries to calculate the future value of the investment. To do that, it uses `i` as the name of the counter and increments it by 1 each time through the loop. It does that as long as the counter is less than or equal to the number of years entered by the user. This means that the loop will be run once for each year. If, for example, the user enters 10 for the number of years, the loop will be run 10 times. Within the loop, the future value is calculated. To do that, the expression in the parentheses calculates the interest for the year.  

  Then, the interest is added to the current value of the `futureValue` variable, and the result is stored in the `futureValue` variable. As figure 3-5 shows, this calculation could also be coded in other ways.  
  
  After the `for` loop finishes, this application uses four `write()` methods with template literals to display the values the user entered, as well as the calculated future value, in the browser. Here, the `toFixed()` method is called on the `futureValue` variable to round it to two decimal places. 
  
  As you can see, this application uses both `do-while` loops and `for` loops. It uses `do-while` loops to get data from the user because it doesn’t know in advance how many times it will take for a user to enter valid data. Once it gets a valid number of years from the user, however, the application knows how many times the loop that calculates the future value needs to execute. Because of that, it uses a `for` loop to do the calculation.

### Your task

This exercise will give you a chance to use `if` statements, `do` loops, and `for` loops as you enhance the **Future Value** application. The eventual output of this application will be displayed in the browser and should look something like Figure 3, 4.
![image](https://github.com/user-attachments/assets/3877417b-26ed-4c1f-8498-35cd34bdc048)
![image](https://github.com/user-attachments/assets/7b475f36-dab5-4876-bbbc-79eb740cb2f6)

**Test the Future Value application**  
1. Opening the `index.html` file in a browser, and test it with valid entries. Then, test it with invalid entries.

**Add a do-while statement for continuing the entries**  
2. Open the `future_value.js` file. Then, add a `do-while` statement to the application so the user can repeat the calculation for another series of entries.

**Improve the validation for the investment, rate, and year entries**  
3. Update the condition for the `do-while` statement for each user entry so the entry must also be a positive number.  
4. For the interest rate entry, add code that makes sure the user enters a value that’s greater than zero and less than 15.

**Enhance the display of the results as shown above**  
5. Modify the `for` loop that calculates the future value so it displays the interest and future value for each year, as shown above. Use `h4` elements for the user entries and `<p>` elements for the results.  
Note that you’ll have to change the location of the existing `write()` methods to get the display the way it is above.

**Save all necessary files in `part3` folder. Don’t forget that you need `index.html` in this folder too.**

## Part 4: Enhance the Test Scores application

This part needs you to study the files in the **part4** folder.
![image](https://github.com/user-attachments/assets/fbfd8cc1-98e5-4ab4-9b83-5cb40766e188)

The enhanced Test Scores application in **Figure 5** uses a `do-while` loop to let the users enter as many scores as they want. Then, when a user enters `-1` to end the entries, the application displays the average test score. The application also tests that each entry is a valid number from `0` through `100` before it is added to the test score total. If an entry isn’t valid, the application displays an error message and issues another prompt statement so the user can either enter another score or `-1` to end the entries.

If you look at the JavaScript for this application, you can see that it starts by declaring three variables that it needs to do its work. The `total` variable will be used to sum the valid test scores. The `count` variable will be used to count the number of valid test scores. And the `score` variable will be used to receive the user entries. Each of these variables is initialized to zero.

Next, a `do-while` loop is used to get the user entries and parse them to an integer. Because this application has to get at least one user entry, it makes sense to use a `do-while` loop instead of a `while` loop. Within the `do-while` loop, the `prompt` method is used to get each user entry. Note that the second parameter is set to `-1` so the user can just press the Enter key to end the entries.

After a user makes an entry, an `if` clause checks that the entry is between `0` and `100`. If it is, the entry is valid, so the entry value is added to the `total` variable and `1` is added to the `count` variable.

Then, the score entered by the user is displayed in the browser. If the entry isn’t between `0` and `100`, the `else if` clause that follows checks to see whether the entry is not equal to `-1`. If it isn’t, an `alert` method displays an error message and the entry isn’t processed. If the entry is `-1`, nothing is done.

When the statements in the loop are finished, the condition for the loop is tested. Then, if the entry value is `-1`, the loop ends. Otherwise, the loop is repeated for the next entry. When the loop ends, the average test score is calculated by dividing the `total` variable by the `count` variable. Then, the `parseInt` method is used to convert the decimal value to an integer, and the average score is displayed in the browser.

### Your task

In this exercise, you’ll make an enhancement to the Test Scores application. What you’ll do is add a `for` loop that gets the highest score in the array and displays it below the average score in the browser:

**Hint**: You will need the new variable to store the highest score, and it should be initialized to zero.

Save all necessary files in **part4** folder. Don’t forget that you need `index.html` in this folder too.


## Part 5: Create an Omikuji (Fortune-Telling) Program

Omikuji (おみくじ) is a traditional Japanese fortune-telling practice often found at Shinto shrines and Buddhist temples. Visitors draw a random slip of paper that reveals their fortune, ranging from "Great Fortune" to "Bad Luck". In this exercise, you'll recreate the fun and excitement of Omikuji by building a simple JavaScript program that generates a random fortune for the user, just like the ones you might get at a shrine! Note that the design of your website is up to you!

#### Requirements:
1. Create an HTML file (`index.html`) that contains:
   - A button that says "Get your fortune".
   - A div or paragraph element to display the generated fortune.
2. Use JavaScript to generate one of the following fortunes randomly:
   - "Great Fortune (大吉)"
   - "Middle Fortune (中吉)"
   - "Small Fortune (小吉)"
   - "Bad Luck (凶)"
3. When the user clicks the "Get your fortune" button, a random fortune will appear on the webpage.

#### Additional Features (Optional):
- Add a feature where the user can click the button multiple times and get a new fortune each time.
- Style the button and the fortune display area with some custom CSS to make it look more appealing.
- Display a message that gives a fun, motivational quote or advice for each fortune type.

#### Instructions:
1. Create the necessary HTML structure with a button and an area to display the fortune.
2. Write the JavaScript to generate a random fortune from the list of possible fortunes.
3. Add an event listener to the button so that it triggers the JavaScript function when clicked.
4. Test the program in your browser to ensure that the fortune is displayed correctly.

Save all necessary files in the `part5` folder. Don't forget that you need `index.html` in this folder too.

---

### Example Layout:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Omikuji Fortune-Telling</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    #fortune {
      font-size: 24px;
      color: #333;
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <h1>Omikuji Fortune-Telling</h1>
  <button onclick="generateFortune()">Get your fortune</button>
  <p id="fortune"></p>

  <script>
   //Add your program here
  </script>

</body>
</html>

