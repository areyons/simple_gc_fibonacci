exports.fibonacci = (req, res) => {

    let compute;

    // make array with Fibonacci numbers which is limited by a num  
    function fibonacci(num) {
        let fib = [0, 1];
        for (let i = 2; i < num; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib;
    }

    // get array and calc sum of odd numbers
    function isOddSum(array) {
        let res = 0;
        for (i = 0; i <= array.length; i++) {
            if (array[i] % 2) {
                res += array[i];
            }
        }
        return res;
    }

    // check that request is in json format
    if (req.get('content-type') == 'application/json') {

        // get compute value from json
        ({compute} = req.body);

        // check if that value is a number
        if (Number.isInteger(compute)) {

            // return result in json format
            res.status(200).send({result: isOddSum(fibonacci(compute))});

        } else {
            res.status(404).send('I need only a number! But you put a ' + typeof(compute));
        }

    } else {
        res.status(404).send('I need only json format!');
    }
};