var express = require("express");
const nodemailer = require('nodemailer');
var router = express.Router();


router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.post("/", function(req, res) {
    const applicationType = req.body.applicationType;
    const connectionType = req.body.connectionType;
    const paymentType = req.body.paymentType;
    const acceptedTandCs= req.body.acceptedTandCs;
    const acceptedMandate = req.body.acceptedMandate;
    const mandateFullName = req.body.mandateFullName;
    const payDate = req.body.payDate;
    const userDetails = req.body.userDetails;
    const compDetails = req.body.compDetails;
    const fibreDetails = req.body.fibreDetails;
    const debitBankDetails = req.body.debitBankDetails;
    const debitInstructionDetails = req.body.debitInstructionDetails;
    const wirelessPackage = req.body.wirelessPackage;

    // //console.log("Yo mama", req.body);
    // const output = `<h3>Submitted Order Form</h3>
    //         <table>
    //             <tr>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td></td>
    //                 <td></td>
    //             </tr>            
    //         </table>` ;
    const outputHeading = getHeadingOutput();
    console.log("Testing: ", fibreDetails);

    function getHeadingOutput(){
        if(connectionType === 'fibre'){
            if(applicationType === 'individual'){
                //outputHeading = ;
                console.log("FTTH");
                return `<h3>FTTH Order Form Submitted</h3>`;
            }
            else if(applicationType === 'company'){
                //outputHeading = `<h3>FTTB Order Form Submitted</h3>`;
                console.log("FTTB");
                return `<h3>FTTB Order Form Submitted</h3>`;
            }
            else{
                console.log("numbnut", applicationType);
            }
        }
        else if(connectionType === 'wireless'){
            if(applicationType === 'individual'){
                //outputHeading = `<h3>WTTH Order Form Submitted</h3>`;
                console.log("WTTH");
                return `<h3>WTTH Order Form Submitted</h3>`;
            }
            else if(applicationType === 'company'){
                //outputHeading = `<h3>WTTB Order Form Submitted</h3>`;
                console.log("WTTB");
                return `<h3>WTTB Order Form Submitted</h3>`;
            }
            else{
                console.log("numbnut2", applicationType );
            }
        }
        else{
            console.log("numbnut3", connectionType);
        }
        return ``;
    }

    const outputUserDetails =  getUserDetails();

    function getUserDetails(){
        if(typeof userDetails === 'undefined'){
            return null;
        }
        else{
            return `<tr>
        <th colspan="2">User Details</th>
        </tr>
        <tr>
            <td>Full Name: </td>
            <td>${userDetails.fullName}</td>
        </tr>
        <tr>
            <td>ID Number: </td>
            <td>${userDetails.id_num}</td>
        </tr>
        <tr>
            <td>Telephone Number: </td>
            <td>${userDetails.tel_num}</td>
        </tr>
        <tr>
            <td>Cellphone Number: </td>
            <td>${userDetails.cell_num}</td>
        </tr>
        <tr>
            <td>City: </td>
            <td>${userDetails.city}</td>
        </tr>
        <tr>
            <td>Post Code: </td>
            <td>${userDetails.post_code}</td>
        </tr>
        <tr>
            <td>Email: </td>
            <td>${userDetails.email}</td>
        </tr>
        <tr>
            <td>Refered by: </td>
            <td>${userDetails.refered_by}</td>
        </tr>`;
        }
        
    }

    const outputCompDetails = getCompDetails();

    function getCompDetails(){
        if(typeof compDetails === 'undefined'){
            return null;
        }
        else{
            return `<tr>
        <th colspan="2">Company Details</th>
        </tr>
        <tr>
            <td>Company Name: </td>
            <td>${compDetails.companyName}</td>
        </tr>
        <tr>
            <td>VAT Number: </td>
            <td>${compDetails.vat_num}</td>
        </tr>
        <tr>
            <td>Registration Number: </td>
            <td>${compDetails.reg_num}</td>
        </tr>
        <tr>
            <td>Contact Person: </td>
            <td>${compDetails.contact_person}</td>
        </tr>
        <tr>
            <td>Telephone Number: </td>
            <td>${compDetails.tel_num}</td>
        </tr>
        <tr>
            <td>Email: </td>
            <td>${compDetails.email}</td>
        </tr>
        <tr>
            <td>Address: </td>
            <td>${compDetails.street_addr}</td>
        </tr>
        <tr>
            <td>City: </td>
            <td>${compDetails.city}</td>
        </tr>
        <tr>
            <td>Post Code: </td>
            <td>${compDetails.post_code}</td>
        </tr>
        <tr>
            <td>Refered by: </td>
            <td>${compDetails.refered_by}</td>
        </tr>`;
        }
    }

    const connectionDetails = getConnectionOutput();
    
    function getConnectionOutput(){
        if(connectionType === 'fibre'){
            if(applicationType === 'individual'){
                return `<tr>
                    <th colspan="2">Individual Fibre Package Details</th>
                    </tr>
                    <tr>
                        <td>Package Speed: </td>
                        <td>${fibreDetails.fibrePackage.speed}MB Uncapped</td>
                    </tr>
                    <tr>
                        <td>Package Price: </td>
                        <td>R${fibreDetails.fibrePackage.price}</td>
                    </tr>
                    <tr>
                        <td>Installation Package: </td>
                        <td>${fibreDetails.fibreInstall.name}</td>
                    </tr>
                    <tr>
                        <td>Installation Payment Period: </td>
                        <td>${fibreDetails.fibreInstall.period}</td>
                    </tr>
                    <tr>
                        <td>Installation Price excl VAT: </td>
                        <td>R${fibreDetails.fibreInstall.price}</td>
                    </tr>`
            }
            else if(applicationType === 'company'){
                return `<tr>
                    <th colspan="2">Company Fibre Package Details</th>
                    </tr>
                    <tr>
                        <td>Package Speed: </td>
                        <td>${fibreDetails.speed}MB 1:1</td>
                    </tr>
                    <tr>
                        <td>Package Price: </td>
                        <td>R${fibreDetails.price}</td>
                    </tr>
                    <tr>
                        <td>Enterprise Installation Package: </td>
                        <td>${fibreDetails.install_price}</td>
                    </tr>`;
            }
            
            
        }
        else if(connectionType === 'wireless'){
            if(applicationType === 'individual'){
                return `<tr>
                    <th colspan="2">Individual Wireless Package Details</th>
                    </tr>
                    <tr>
                        <td>Package Speed: </td>
                        <td>${wirelessPackage.speed}MB Broadband</td>
                    </tr>
                    <tr>
                        <td>Package Price: </td>
                        <td>R${wirelessPackage.price}</td>
                    </tr>
                    <tr>
                        <td>Installation Once-Off: </td>
                        <td>${wirelessPackage.install_price}</td>
                    </tr> `
            }
            else if(applicationType === 'company'){
                return `<tr>
                    <th colspan="2">Company Wireless Package Details</th>
                    </tr>
                    <tr>
                        <td>Package Speed: </td>
                        <td>${wirelessPackage.speed}MB Enterprise Broadband</td>
                    </tr>
                    <tr>
                        <td>Package Price: </td>
                        <td>R${wirelessPackage.price}</td>
                    </tr>
                    <tr>
                        <td>Installation Once-Off: </td>
                        <td>${wirelessPackage.install_price}</td>
                    </tr> `
            }
            
        }
        return ``;       
    };
    const outputPayment = getPaymentOutput();

    function getPaymentOutput(){
        if(paymentType === "eft"){
            return `<tr>
                        <th colspan="2">Payment Details</th>
                    </tr>
                    <tr>
                        <td>Payment Method</td>
                        <td>EFT</td>
                    </tr>
                    <tr>
                        <td>First Payment Date</td>
                        <td>${payDate}</td>
                    </tr>`;
        }
        else if(paymentType === "debit"){
            return `<tr>
                        <th colspan="2">Payment Details</th>
                    </tr>
                    <tr>
                        <td>Payment Method</td>
                        <td>Debit</td>
                    </tr>
                    <tr>
                        <td>First Payment Date</td>
                        <td>${payDate}</td>
                    </tr>
                    <tr>
                        <th colspan="2">DEBIT ORDER INSTRUCTION</th>
                    </tr>
                    <tr>
                        <td>Debtor Name</td>
                        <td>${debitInstructionDetails.debtor_name}</td>
                    </tr>
                    <tr>
                        <td>Abbreviated Name</td>
                        <td>${debitInstructionDetails.debtor_name_register_bank}</td>
                    </tr>
                    <tr>
                        <td>Contact Number</td>
                        <td>${debitInstructionDetails.debtor_cont_num}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>${debitInstructionDetails.debtor_address}</td>
                    </tr>
                    <tr>
                        <th colspan="2">Bank Details</th>
                    </tr>
                    <tr>
                        <td>Bank Name</td>
                        <td>${debitBankDetails.bank}</td>
                    </tr>
                    <tr>
                        <td>Branch Name</td>
                        <td>${debitBankDetails.branch}</td>
                    </tr>
                    <tr>
                        <td>Branch Code</td>
                        <td>${debitBankDetails.branchCode}</td>
                    </tr>
                    <tr>
                        <td>Account Name</td>
                        <td>${debitBankDetails.accountName}</td>
                    </tr>
                    <tr>
                        <td>Account Number</td>
                        <td>${debitBankDetails.accountNumber}</td>
                    </tr>
                    <tr>
                        <td>Account Type</td>
                        <td>${debitBankDetails.accountType}</td>
                    </tr>
                    <tr>
                        <td>Mandate Name</td>
                        <td>${mandateFullName}</td>
                    </tr>`
                    
                    ;
        }
    }
    //console.log("Testing: ", connectionDetails.toString());
    
    const fullOutput = outputHeading + `<table border="1">` + (applicationType === "individual" ? outputUserDetails : outputCompDetails) + connectionDetails + outputPayment +`</table>`
    



    //const fullOutput = "<table>" + outputUserDetails + "</table>";

    // let transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: 'michaelsolomon.games@gmail.com', // generated ethereal user
    //         pass: 'Wicked@games123' // generated ethereal password
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    //     });

    //     // send mail with defined transport object
    //     let mailOptions = {
    //     from: '"Crispy Fibre 👻" <michaelsolomon.games@gmail.com>', // sender address
    //     to: "migalGaming@gmail.com", // list of receivers
    //     subject: "Order Form Submittion ", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: fullOutput // html body
    //     };
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if(error){
    //             return console.log(error);
    //         }
    //         console.log("Message sent: %s", info.messageId);
    //         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     })

        console.log("All", req.body);
        //console.log("compDetails", req.body.compDetails);
    });
// router.post("/", function(req, res) {
//     const output = `
//     <You have a new client who submitted a form>
//     <h3>Client Details</h3>
//     <ul>
//         <li>Name: ${req.body.name}</li>
//         <li>Company: ${req.body.company}</li>
//         <li>Email: ${req.body.email}</li>
//         <li>Phone: ${req.body.phone}</li>        
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>`; 

//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: 'michaelsolomon.games@gmail.com', // generated ethereal user
//           pass: 'Wicked@games123' // generated ethereal password
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//       });
    
//       // send mail with defined transport object
//       let mailOptions = {
//         from: '"Crisp Fibre Slette 👻" <michaelsolomon.games@gmail.com>', // sender address
//         to: "migalGaming@gmail.com", // list of receivers
//         subject: "Testing Express Server For WebForm - Crisp Fibre", // Subject line
//         text: "Hello world?", // plain text body
//         html: output // html body
//       };
//       transporter.sendMail(mailOptions, (error, info) => {
//           if(error){
//               return console.log(error);
//           }
//             console.log("Message sent: %s", info.messageId);
//             console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//       })
// });


module.exports = router;