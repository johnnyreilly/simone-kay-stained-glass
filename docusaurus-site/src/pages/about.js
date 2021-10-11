import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.description}>
      <main style={{ marginBottom: "2rem" }}>
        <div className="container">
          <h1>About us</h1>
          <p>
            The elder Pliny would have us believe that glass was discovered by
            some Phoenicians after a beach party. In the embers of their fire,
            so the story goes, were lumps of fused glass, the product of a high
            temperature reaction between the beach sand and a crude form of soda
            they were using as fuel.
          </p>
          <p>
            However, glass has been known about for at least 4,000 years and
            some thirty years ago Simone Kay started learning how to work with
            it.
          </p>
          <p>
            She studied at Kingston, then Reigate and finally Chelsea School of
            art and has worked with the medium ever since.
          </p>
          <p>
            She began teaching all aspects of the craft at King Charles Adult
            Education Centre, Surbiton in 1987 and still runs three classes
            there. Teaching is very important to Simone and she often involves
            her students in community based projects. The most recent of these
            is a large internal window at Kingston hospital.
          </p>
          <p>
            In 1997 she teamed up with graphic and mural artist Cliff Port to
            set up the studio in Hawks Road, Kingston. The results of this
            collaboration can be seen all over the borough and beyond.
          </p>
          <h3>The Paintings</h3>
          <p>
            Almost every piece of finished work started off as a painting.
            Simone rarely goes anywhere without a sketchpad and a set of
            watercolours.
          </p>
          <h2>Techniques</h2>
          <div className="row">
            <div className="col col--6">
              <h3>Leaded Panels</h3>
              <p>
                Stained glass is usually created by one of three techniques, the
                oldest of which has hardly changed in a thousand years.
              </p>
              <p>
                Leaded panels can be seen in countless churches and private
                house, particularly those from the Victorian era. This leaded
                process is excellent for flat, two-dimensional work and involves
                slotting the cut pieces of glass into narrow lengths of
                channelled lead. The joints are soldered and the panel cemented
                with a form of dark putty.
              </p>
            </div>
            <div className="col col--6">
              <h3>Copper Foil</h3>
              <p>
                Copper foiling is a legacy from Tiffany and is used for
                three-dimensional work like lampshades, terrariums and small
                boxes. Here, the edges of the cut glass are bound with a thin
                adhesive copper ribbon, which can then be soldered together,
                edge to edge. The soldered areas are then washed with patina for
                a permanent finish in black or a tarnished copper.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col col--6">
              <h3>Applique</h3>
              <p>
                Stained glass appliqu&eacute; can be used to create similar
                effects to leaded panels by gluing, with transparent resins, the
                cut pieces of glass onto a back plate of plain glass. The gaps
                between the pieces are then filled with a dense, black cement,
                reminiscent of traditional lead lines, but readily variable in
                width and effect. This technique is very useful for clearing out
                off-cuts (cullet) that are too small for any other purpose.
              </p>
            </div>
            <div className="col col--6">
              <h3>The Process</h3>
              <p>
                When the design is agreed upon, a cartoon is made. This is a
                full size drawing, usually on tracing paper, showing the lines
                where the lead will be and, more importantly the thickness of
                the lead. The glass must be cut to accommodate this. Once all
                the pieces are cut and all their respective treatments
                (painting, etching etc.) have been completed, the panel is
                assembled and the lead joints soldered. The panel is then
                cemented using a form of putty, then cleaned and polished with
                grate polish (to prevent the lead oxidizing). The panel takes
                about a week to dry out and is then installed.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col col--6"></div>
            <div className="col col--6"></div>
          </div>

          <div className="row">
            <div className="col col--6">
              <h3>Kiln Fired Painting</h3>
              <p>
                The idea of painting onto glass is almost as old as glass
                itself, but it was around the early medieval period in Germany
                when it became a respected trade. By using a mixture of powdered
                glass and iron oxide a medium for painting is prepared with
                vinegar or water and gum Arabic (this is to help the
                &ldquo;paint&rdquo; adhere to the glass before firing). When the
                painting is complete the glass is fired in the kiln at around
                600 degrees Celsius. The medium then fuses with the glass thus
                creating an image that cannot fade or be removed. To add colour,
                silver stain (where the term &ldquo;stained glass&rdquo;
                originates) can be applied and fired to give a range of yellow
                tints, also permanent. Other colours can be added and fired by
                using enamel, however, these will deteriorate after about 200
                years.
              </p>
            </div>
            <div className="col col--6">
              <h3>Green Credentials</h3>
              <p>
                We try to make our business as green as possible by using
                reclaimed glass in our designs. When we replace a window we keep
                the old glass and design windows that incorporate old textures.
                We offer a service to triple glaze stained glass with the
                obvious insulation benefits. The outer piece of glass having
                extra thermal insulation qualities. We are currently trialing
                LED lighting for the interior of our shop/ studio. When we are
                cold we put on extra clothes. We eat organically and support the
                local food supplier From the Ground Up.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
