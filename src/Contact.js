import styled from "styled-components";

import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <Wrapper>
        <h1 className="common-heading">Contact</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278356.0136374329!2d23.84889178293568!3d56.971818744652815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga!5e0!3m2!1sen!2slv!4v1675864707456!5m2!1sen!2slv"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="abc"
        ></iframe>
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mpzeppal"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
                // className="contact-inputs"
                value={isAuthenticated ? user.name : ""}
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                required
                autoComplete="off"
                value={isAuthenticated ? user.email : ""}
                // className="contact-inputs"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter Your Message"
                // className="contact-inputs"
              ></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
