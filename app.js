const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For email notifications

const app = express();
app.use(bodyParser.json());

app.post('/webhook/orders/create', async (req, res) => {
    const order = req.body;
    console.log(order)
    res.status(200).send('Webhook received');

    // // Example sellers and their product IDs
    // const sellers = {
    //     seller1: ['product_id_1', 'product_id_2'],
    //     seller2: ['product_id_3'],
    //     // Add other sellers and their product IDs
    // };

    // // Loop through the products in the order
    // order.line_items.forEach(item => {
    //     for (const [seller, products] of Object.entries(sellers)) {
    //         if (products.includes(item.product_id)) {
    //             // Send notification to the seller
    //             sendNotification(seller, order);
    //         }
    //     }
    // });

    // res.status(200).send('Webhook received');
});

// function sendNotification(seller, order) {
//     // Setup email or SMS service to notify seller
//     console.log(`Notifying ${seller} about order ${order.id}`);

//     // Example using nodemailer for email
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your-email@gmail.com',
//             pass: 'your-password',
//         },
//     });

//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: `${seller}@example.com`, // Seller's email
//         subject: `New Order #${order.id}`,
//         text: `You have a new order containing your product(s).`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Email sent: ' + info.response);
//     });
// }

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});