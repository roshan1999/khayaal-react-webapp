const loadScript = (src) => {
    return new Promise((resolve) =>  {
        const script = document.createElement('script');
        script.src = src;

        script.onload = () => {
            resolve(true);
        }

        script.onerror = () => {
            resolve(false);
        } 

        document.body.appendChild(script);
    })
}

async function displayRazorpay(props) {
    const { paymentAmount, paymentMessage } = props;
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res) {
        alert("You are offline, failed to load payment");
        return;
    }

    // console.log(paymentAmount, paymentMessage);

    const options = {
        key: "rzp_live_okvMCaMjo06vmy",
        currency: "INR",
        amount: paymentAmount * 100,
        name: "Donating to Khayaal NGO",
        description: paymentMessage,
        handler: function(response) {
            alert(response.razorpay_payment_id);
            alert("Donation made successfully");
        }, 
        prefill: {
            name: "Khayaal NGO"
        }
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

export default displayRazorpay;