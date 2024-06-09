import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const getSmsData = async (request, response, next) => {
    try {
        await sendSms(request.body.phoneNumber, request.body.text, response)
    } catch (error) {
        return next(error);
    }
}

const sendSms = async (phoneNumber, text, response) => {
   try {
    await client.messages.create({
        body: text,
        from: `+12074666679`,
        to: phoneNumber,
    }).then(messages => {
        // console.log(messages.toJSON());
        response.status(200).json({
            data: messages.toJSON(),
            messages: "sms send successfully",
            success: true,
        })
        return messages.toJSON()
    });
   } catch (error) {
    console.log(error);
   }
}