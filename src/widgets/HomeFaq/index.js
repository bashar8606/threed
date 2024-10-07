"use client";
import style from "./HomeFaq.module.scss";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { IoIosArrowUp } from "react-icons/io";

const HomeFaq = ({ id }) => {

    return (
        <section
            className={`${style.section} sec-padding d-flex align-items-center`}
            id={id}
        >
            <div className="container">
                <div className="col-lg-10 mx-auto">
                    <h2 className="h2 fw-400 mb-4 mb-lg-5">Frequently asked questions</h2>

                    <Accordion defaultActiveKey={"0"} className={style.accordion}>
                        {data?.map((item, i) => {
                            return (
                                <Accordion.Item key={i} eventKey={`${i}`}>
                                    <Accordion.Header>
                                        {item?.q}
                                        <div className={`${style.icon} ms-auto position-relative d-flex align-items-center justify-content-center z-3 rounded-circle`}>
                                            <IoIosArrowUp />
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row ">
                                            <div className="col-lg-10">
                                                <div className="dynamic-content" dangerouslySetInnerHTML={{ __html: item?.a }}></div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default HomeFaq;


const data = [
    {
        q: " Coding For Kids",
        a: "<p>Whether you are a student interested in the IT careers that you could explore with a coding qualification or just fascinated by the world of tech and coding courses, Come Learn Online offers a wide range of online coding courses that make coding accessible to kids and young teenagers. </p>"
    },
    {
        q: "What are Coding classes for kids?",
        a: "<p>Come Learn Online’ coding classes are designed to help your children learn programming from an early age. Our specially curated course will cover Coding Fundamentals to Creative Coding, STEM Apps, Front & Back End Development, Artificial intelligence course and much more.</p><p>We have developed kids programming courses that allow kids, teens, and young adults to learn how to code at all ages with proper coding classes and in an environment that works for them – Online. </p><p>The courses offered by Come Learn Online are designed to teach kids to code with core programming skills, and then improve the proficiency of the kids coding languages. Our facilitators align digital literacy into coding courses, as required by the existing skills of the learners. Since our curriculum is developed by industry experts and the most important activity of teaching coding is done by top 1% selected teachers, learners get state of the art education through our propriety, creative activity based curriculum. </p>"
    }, {
        q: "At what age can a child start coding?",
        a: "<p>Kids as young as 6 years of age can start coding and learn programming. Our online coding classes are designed in a way so that every kid (from grades 1-12) can ease into the world of programming.</p>"
    }, {
        q: "Is coding good for kids?",
        a: "<p>Having children learn how to code from an early age not only prepares them for a future in programming but also helps them sharpen their analytical & logical skills.</p><p>Come Learn Online teaches coding for kids in programs designed to stimulate creativity, problem-solving skills, and academic performance overall.  Over the longer term, online coding courses are a great way to train learners for an increasingly tech-oriented world.</p>"
    }, {
        q: "What will you learn in a coding course for kids?",
        a: "<p>Come Learn Online's coding courses are oriented towards coding and programming. You will learn:</p><ul><li>The essentials of coding: Logic, Structure, Sequence</li><li>How to create Websites, Animations & Apps</li><li>How to manipulate data using programming languages</li><li>How to be a problem solver</li><li>How technologies converse with each other</li></ul></ul>"
    },
    {
        q: "Where will the classes take place?",
        a: "<p>You can take these classes from anywhere as per your convenience. A laptop or desktop with good internet connection for facilitating Live classes is required.</p>"
    }, {
        q: "How frequent are these classes?",
        a: "<p>We recommend 2 classes per week, so that the child gets ample amount of time to absorb and practice learnings. </p>"
    }, {
        q: "What happens if I miss a class?",
        a: "<p>You just take the class in your next available date. There is no fixed schedule for these classes and you can schedule these as per your convenience. If you are going on vacation, simply do not schedule a class for the period. Thus, there are no missed classes.</p><p>If you or your child would like to find out more about the opportunities provided by our coding programs, explore the kids programming courses offered by Come Learn Online and consider enrolling for a free trial. </p>"
    }
]