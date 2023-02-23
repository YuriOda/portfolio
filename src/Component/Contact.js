const Contact = () => {
  const copyToClipboardHandler = () => {
    const address = document.getElementById("address");
    address.select();
    document.execCommand("Copy");
  };

  return (
    <>
      <section id="contact">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-eng">
          I am open to any full time job oppotunities!
        </p>
        <p>正式な面接等ではなくても、お気軽にご連絡いただけると嬉しいです</p>
        <p className="contact-causion">
          ※ 御手数ですが、アドレスの▲を@に変更お願いします
        </p>

        {/* <SvgEnvelop className="contact-envelop" /> */}
        <div className="contact-address">
          <input
            id="address"
            type="text"
            value="yuri.oda.lily▲gmail.com"
            readOnly
          />
          <button onClick={copyToClipboardHandler}>Copy</button>
        </div>
      </section>
    </>
  );
};

export default Contact;
