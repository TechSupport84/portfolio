import React from 'react';
import { FaFacebook, FaGit, FaLinkedin, FaYoutube } from 'react-icons/fa';

function FooterPage() {
    const contacts = [
        {id: 1, name: "Youtube", url: "https://www.youtube.com/watch?v=e4FIuC0l04w&t=76s&ab_channel=codeWithJeancy"},
        {id: 2, name: "Facebook", url: "https://www.facebook.com/jeancy24Sur.com24/"},
        {id: 3, name: "Git", url: "https://github.com/TechSupport84"},
        {id: 4, name: "LinkedIn", url: "https://www.linkedin.com/in/jeancy-mpoyi002/"},
    ];

    return (
        <div className=" border border-gray-500 bg-gray-800 text-white py-5 rounded mb-5">
            <div className="flex justify-center gap-6">
                {contacts.map(contact => (
                    <a 
                        key={contact.id} 
                        href={contact.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white text-3xl hover:scale-110 transition-all duration-300 ease-in-out"
                    >
                        {contact.name === "Facebook" && <FaFacebook />}
                        {contact.name === "Git" && <FaGit />}
                        {contact.name === "LinkedIn" && <FaLinkedin />}
                        {contact.name === "Youtube" && <FaYoutube />}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterPage;
