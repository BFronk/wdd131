// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('______'); 
// const li = document.createElement('li');
// const deletebutton = document.createElement('button'); 

// button.addEventListener("click", submitChap);

// function submitChap()
// {
//     if (input.value.trim() !== '')
//     {
//         li.textContent = input.value;
//         deletebutton.textContent = '❌';
//         li.append(deletebutton);
//         list.append(li);
//         input.value = '';
//     }
//     else
//     {
//         input.focus();
//     }
// }

// deletebutton.addEventListener('click', delItem);

// function delItem()
// {
//     list.removeChild(li);
//     input.focus();
//     input.value = '';
// }



const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener("click", submitChap);

function submitChap() {
    if (input.value.trim() !== '') {
        const list = document.querySelector('#myList'); // Replace '#myList' with your actual list selector.
        const li = document.createElement('li'); // Create a new `li` each time.
        const deletebutton = document.createElement('button'); // Create a new button for each `li`.

        li.textContent = input.value; // Set `li` text.
        deletebutton.textContent = '❌'; // Set button text.

        // Append the button to `li`, and `li` to the list.
        li.append(deletebutton);
        list.append(li);

        // Add delete functionality for this button.
        deletebutton.addEventListener('click', () => {
            list.removeChild(li); // Remove the corresponding `li`.
        });

        // Reset input.
        input.value = '';
        input.focus();
    } else {
        input.focus(); // Refocus the input field if the value is empty.
    }
}
