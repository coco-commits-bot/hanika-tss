import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import avatarFemale from '../assets/images/avatar-female.jpg'
import avatarMale from '../assets/images/avatar-male.jpg'
import academic9 from '../assets/images/academic-9.png'
import academic11 from '../assets/images/academic-11.png'
import academic10 from '../assets/images/academic-10.png'
import academic12 from '../assets/images/academic-12.jpeg'
import academic18 from '../assets/images/academic-18.jpg'
import academic14 from '../assets/images/academic-14.jpeg'
import academic17 from '../assets/images/academic-17.jpeg'
import academic13 from '../assets/images/academic-13.jpeg'
import academic19 from '../assets/images/academic-19.jpg'
import styles from './About.module.css'

const choosenCards = [
  {
    key: 'card1',
    icon: 'fa-graduation-cap',
    title: 'Quality Technical Education',
    desc: "Receive competency-based training that combines classroom learning with hands-on practical experience, preparing students with the knowledge and technical skills demanded by today's industries.",
    img: null,
  },
  {
    key: 'card2',
    icon: 'fa-gears',
    title: 'Modern Learning Facilities',
    desc: 'Learn in well-equipped computer laboratories, workshops, and practical training environments designed to help students master their chosen TVET trades through real-world experience.',
    img: academic9,
  },
  {
    key: 'card3',
    icon: 'fa-briefcase',
    title: 'Career & Entrepreneurship Opportunities',
    desc: 'Gain valuable industrial attachment experience, entrepreneurship skills, and career guidance that prepare graduates for employment, higher education, or starting their own successful businesses.',
    img: academic11,
  },
  {
    key: 'card4',
    icon: 'fa-user-tie',
    title: 'Experienced Trainers',
    desc: 'Our qualified instructors mentor, inspire, and guide students throughout their academic journey, ensuring they develop confidence, professionalism, and industry-ready competencies.',
    img: academic10,
  },
  {
    key: 'card5',
    icon: 'fa-car-side',
    title: 'Affordable Driving Training',
    desc: 'We provide free road safety and traffic rules education while offering practical driving lessons at an affordable cost, helping learners become responsible, skilled, and confident drivers.',
    img: null,
  },
]

const trades = [
  {
    img: academic12,
    title: 'Software development',
    stars: 5,
    half: false,
    desc: "Master coding, software engineering, and web development. Students gain hands-on expertise in programming languages, database management, and mobile application development. Through practical projects and real-world problem solving, learners build essential technical skills required to design, test, and maintain innovative digital solutions for today's fast-evolving, tech-driven global industries.",
  },
  {
    img: academic18,
    title: 'Automobile Technology',
    stars: 5,
    half: false,
    desc: 'Dive into the modern automotive industry with practical training in vehicle diagnostics, engine overhaul, auto-electrical systems, and maintenance. Learners develop mechanical expertise and technical precision to inspect, repair, and service light and heavy vehicles. This program prepares graduates for success in service centers and specialized industrial auto workshops.',
  },
  {
    img: academic14,
    title: 'Accounting',
    stars: 5,
    half: false,
    desc: 'Acquire essential financial management skills through training in modern bookkeeping, financial analysis, taxation, and computerized accounting software. This program equips students to manage organizational finances accurately, process complex transactions, and drive business growth. Graduates gain the confidence and precision needed to maintain transparent financial records in any enterprise.',
  },
  {
    img: academic17,
    title: 'Building & Construction Services',
    stars: 4,
    half: false,
    desc: 'Gain comprehensive skills in modern construction methods, structural drawing, masonry, plumbing, and project estimation. Students receive practical training to prepare for key roles in safe, high-quality residential, commercial, and industrial building projects. The curriculum emphasizes safety standards and structural integrity, giving graduates a competitive edge in construction.',
  },
  {
    img: academic13,
    title: 'Electrical Technology',
    stars: 4,
    half: true,
    desc: 'Learn to design, install, test, and maintain domestic and industrial electrical systems. This program covers wiring, circuit design, power distribution, renewable energy technologies, and safety compliance standards. Students gain hands-on experience that equips them for high-demand technical careers in energy management, electrical installation, control systems, and automation.',
  },
  {
    img: academic19,
    title: 'Networking and Internet Technology',
    stars: 4,
    half: true,
    desc: 'Master computer networking, cloud computing, network security, and internet infrastructure. Students gain practical experience configuring routers and switches, managing servers, and troubleshooting network issues. Through hands-on lab training, learners build essential technical skills to deploy and maintain secure communication networks for modern enterprises in an interconnected digital world.',
  },
]

const staff = [
  {
    role: 'school manager',
    name: 'Ngiruwonsanga Deo',
    gender: 'male',
    desc: 'Holding an A0 in Information Technology, Deo oversees the overall administration and strategic direction of Hanika TSS, ensuring smooth daily operations, staff coordination, and the continued growth of technical education at the school.',
    email: 'ngiradeo10@gmail.com',
    phone: '0788865671',
  },
  {
    role: 'director of studies',
    name: 'Muhirwa David',
    gender: 'male',
    desc: 'With an A0 in Information Technology and postgraduate studies, David leads academic planning and supervision at Hanika TSS, coordinating the curriculum, timetables, and teaching standards across all TVET trades.',
    email: 'muhiadavid3@gmail.com',
    phone: '0785189326',
  },
  {
    role: 'accountant',
    name: 'Uwase Nicole',
    gender: 'female',
    desc: 'Nicole holds an A0 in Accounting and manages the finance office, handling budgeting, reporting, and the accurate, transparent keeping of the school\'s financial records.',
    email: 'nicouwase2001@gmail.com',
    phone: '0784150774',
  },
  {
    role: 'director of discipline',
    name: 'Niyigena Sylvestre',
    gender: 'male',
    desc: 'An A2 graduate in Building Construction, Sylvestre is responsible for maintaining discipline and good conduct among students, fostering a respectful and orderly learning environment across the school.',
    email: 'niyigenasylivesitry@gmail.com',
    phone: '0783487800',
  },
  {
    role: 'assistant accountant',
    name: 'Dushimiyimana Rosine',
    gender: 'female',
    desc: 'Rosine holds an A0 in Accounting and supports the finance office with bookkeeping, transaction processing, and the day-to-day financial administration of the school.',
    email: 'dushimiyimanarosine@gmail.com',
    phone: '0780757756',
  },
  {
    role: 'secretary',
    name: 'Ishimwe Charlotte',
    gender: 'female',
    desc: 'Fluent in English, French, and Kinyarwanda following her A2 studies, Charlotte manages correspondence, records, and front-office communication for Hanika TSS.',
    email: 'charlotteishimwe747@gmail.com',
    phone: '0780650756',
  },
]

const marqueeBrands = [
  { name: 'whatsapp', icon: 'fab fa-whatsapp' },
  { name: 'facebook', icon: 'fab fa-facebook' },
  { name: 'youtube', icon: 'fab fa-youtube' },
  { name: 'instagram', icon: 'fab fa-instagram' },
  { name: 'twitter', icon: 'fab fa-x-twitter' },
]

function Stars({ count, half }) {
  const stars = []
  for (let i = 0; i < count; i++) stars.push(<i className="fas fa-star" key={i}></i>)
  if (half) stars.push(<i className="fas fa-star-half-stroke" key="half"></i>)
  for (let i = stars.length; i < 5; i++) stars.push(<i className="far fa-star" key={`e${i}`}></i>)
  return <div className={styles.ratings}>{stars}</div>
}

export default function About() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.title = 'Hanika TSS | About School'
  }, [])

  const next = () => setIndex((i) => Math.min(i + 1, trades.length - 1))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  return (
    <div>
      <div className={styles.head}>
        <Nav showLogo />
        <div className={styles.content}>
          <div className={styles.title}>
            <span>About</span> our beloved school
          </div>
          <div className={styles.subTitle}>
            Hanika TSS <span>| About School</span>
          </div>
        </div>
      </div>

      <div className={styles.beforeText}>
        <div className={styles.before}>
          <i className="fas fa-quote-left"></i>
        </div>
        <p className={styles.text}>
          Hanika Technical Secondary School (Hanika TSS) is one of the technical
          education institutions operating under Hanika Anglican Integrated
          Polytechnic (HAIP) in Hanika Cell, Busasamana Sector, Nyanza District,
          Southern Province of Rwanda. Established with the vision of promoting
          quality Technical and Vocational Education and Training (TVET), the
          school has contributed significantly to developing a skilled workforce
          capable of meeting Rwanda's socio-economic development goals. Over the
          years, HAIP has expanded its programs and learning facilities, providing
          students with both theoretical knowledge and practical experience.
          Hanika TSS currently offers several TVET trades, including Software
          Development, Networking and Internet Technology, Electrical Technology,
          Automobile Technology, and Building Construction. Students benefit from
          well-equipped workshops and computer laboratories, experienced
          instructors, industrial attachments, career guidance, and
          competency-based training aligned with labor market needs. Studying at
          Hanika TSS enables learners to acquire practical skills, innovation,
          entrepreneurship, teamwork, and problem-solving abilities that enhance
          employability and self-reliance. Graduates have opportunities to pursue
          higher education, establish their own businesses, secure employment in
          public and private institutions, or contribute to community development
          through technical expertise, making Hanika TSS an excellent choice for
          future professionals.
        </p>
      </div>

      <div className={styles.choosen}>
        <div className={styles.top}>
          <div className={styles.choosenTitle}>Why choose Hanika Tss?</div>
          <div className={styles.subtitle}>
            Your future begins with the right education. Hanika TSS/HAIP empowers
            learners through hands-on training, experienced instructors, and
            career-focused programs designed to prepare graduates for employment,
            entrepreneurship, and higher education.
          </div>
        </div>
        <div className={styles.bottom}>
          {choosenCards.map((card) => (
            <div className={`${styles.card} ${styles[card.key]}`} key={card.key}>
              <div className={styles.svg}>{card.img && <img src={card.img} alt="" />}</div>
              <div className={styles.text}>
                <div className={styles.cardtext}>
                  <i className={`fas ${card.icon}`}></i> <span>{card.title}</span>
                </div>
                <div className={styles.cardsub}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.quotes}>
        <div className={styles.cards}>
          <div className={styles.quoteCard}>
            <div className={styles.icon}>
              <i className="fas fa-eye"></i>
            </div>
            <div className={styles.quoteTitle}>vision</div>
            <div className={styles.desc}>
              To be a center of excellence in technical and vocational education,
              producing skilled professionals who contribute to the development of
              our society.
            </div>
          </div>
          <div className={styles.quoteCard}>
            <div className={styles.icon}>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className={styles.quoteTitle}>motto</div>
            <div className={styles.desc}>
              Excellence in Technical Education and culture with values
            </div>
          </div>
          <div className={styles.quoteCard}>
            <div className={styles.icon}>
              <i className="fas fa-flag"></i>
            </div>
            <div className={styles.quoteTitle}>mission</div>
            <div className={styles.desc}>
              To provide quality technical and vocational education and training
              that meets the needs of the industry and society.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.alltrades} id="alltrades">
        <div className={styles.topic}>our school tvet branches</div>
        <div className={styles.greatCard}>
          <div
            className={styles.allSections}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {trades.map((trade) => (
              <div className={styles.section} key={trade.title}>
                <div className={styles.left}>
                  <img src={trade.img} alt={trade.title} />
                </div>
                <div className={styles.right}>
                  <div className={styles.tradeTitle}>{trade.title}</div>
                  <Stars count={trade.stars} half={trade.half} />
                  <div className={styles.description}>{trade.desc}</div>
                  <div className={styles.apply}>Apply now</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.greatAfter}>
            <i className="fas fa-angle-left" onClick={prev}></i>
            <div className={styles.showpos}>
              {trades.map((trade, i) => (
                <div
                  key={trade.title}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => setIndex(i)}
                ></div>
              ))}
            </div>
            <i className="fas fa-angle-right" onClick={next}></i>
          </div>
        </div>
      </div>

      <div className={styles.staff}>
        <div className={styles.staffTitle}>meet the staff</div>
        <div className={styles.elders}>
          {staff.map((person, i) => (
            <div className={styles.elder} key={`${person.name}-${i}`}>
              <div className={styles.tops}>
                <div className={styles.profile}>
                  <img
                    src={person.gender === 'female' ? avatarFemale : avatarMale}
                    alt={person.name}
                  />
                </div>
                <div className={styles.logs}>
                  <div className={styles.headings}>{person.role}</div>
                  <div className={styles.smallHeadings}>{person.name}</div>
                </div>
              </div>
              <div className={styles.butt}>
                <p className={styles.descr}>{person.desc}</p>
                <div className={styles.contacts}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-envelope" title="email address"></i>
                    <p className={styles.email}>{person.email}</p>
                  </div>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-phone" title="phone number"></i>
                    <p className={styles.email}>{person.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.group}>
          {[...marqueeBrands, ...marqueeBrands].map((brand, i) => (
            <div className={`${styles.brand} ${styles[brand.name]}`} key={`${brand.name}-${i}`}>
              <i className={`${brand.icon} ${styles.brandIcon}`}></i>
              <div className={styles.name}>{brand.name}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
