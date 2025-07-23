import Button from '../ui/Button';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="text-center">
          <Button href="mailto:nicolsrojas.dev@gmail.com" variant='link' target='_blank'>
            Email
          </Button> |&nbsp;
          <Button href="https://www.linkedin.com/in/nicolsrojas" variant='link' target='_blank'>
            Linkedin
          </Button> |&nbsp;
          <Button href="https://github.com/nicolsrojas" variant='link' target='_blank'>
            Github
          </Button>
        </p>
        <p className="text-center">
          © {new Date().getFullYear()} Nicols Rojas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}