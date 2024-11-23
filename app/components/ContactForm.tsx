const ContactForm = () => (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="p-3 border rounded" />
      <input type="email" placeholder="Your Email" className="p-3 border rounded" />
      <textarea placeholder="Your Message" className="p-3 border rounded"></textarea>
      <button type="submit" className="p-3 bg-blue-500 text-white rounded">
        Send Message
      </button>
    </form>
  );
  
  export default ContactForm;
  