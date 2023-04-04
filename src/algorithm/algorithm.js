export const sendEmail = (to_mail) => {
  const from_mail = 'hibusiness1000@gmail.com';

  window.Email.send({
    SecureToken: 'f9244c6d-de05-49b0-afea-831fdcc69171',
    From: from_mail,
    To: to_mail,
    Subject: 'This is the subject',
    Body: 'And this is the body',
  });
};
