# calculator

--

# remaininng tasks:

--add a delete button that deletes the lat item in the input
--addig operation for the same multiple operator of the the numbers
--adding a bodmas operation to the calculator

Gotchas: watch out for and fix these bugs if they show up in your code:
Your calculator should not evaluate more than a single pair of numbers at a time. For example, this is how your calculator should function:
Enter a number (12).
Enter an operator (+).
Enter a second number (7).
Enter a second operator (-). At this point, it should evaluate the initial pair of numbers (12 + 7), then display the result (19).
Enter another number (1).
Enter another operator or equals sign (=). At this point, it should use the previous result (19) as the first number, the operator (-), and the new number (1) to calculate the new equation 19 - 1. You should see the result (18) on the display.
To see what this looks like in action, feel free to input the equation we just explained 12 + 7 - 1 = into this online calculator.
You should round answers with long decimals so that they don’t overflow the display.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.
When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!
Extra credit
Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
Add a “backspace” button, so the user can undo their last input if they click the wrong number.
Add keyboard support!
