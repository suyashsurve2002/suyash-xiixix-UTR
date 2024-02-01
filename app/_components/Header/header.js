import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800">
            <nav className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                    <a href="/" className="text-white font-bold text-lg">Home</a>
                    <a href="/properties" className="ml-4 text-white">Properties</a>
                    <a href="/about" className="ml-4 text-white">About</a>
                </div>
                <div className="flex items-center">
                    {/* Add any additional elements here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
