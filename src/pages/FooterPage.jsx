import React from 'react';
import { FaFacebook, FaGit, FaLinkedin, FaYoutube } from 'react-icons/fa';

function FooterPage() {
    const contacts = [
        {id: 1, name: "Youtube", url: "//youtube.com"},
        {id: 2, name: "Facebook", url: "//facebook.com"},
        {id: 3, name: "Git", url: "//github.com"},
        {id: 4, name: "LinkedIn", url: "//linkedin.com"},
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
