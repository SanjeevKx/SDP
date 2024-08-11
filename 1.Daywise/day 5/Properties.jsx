import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

const Properties = () => {
    const [activeTab, setActiveTab] = useState('for-sale');
    const [open, setOpen] = useState(false);

    const forSaleImages = [
        { src: 'https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-un.jpg?updatedAt=1722102898926', alt: 'House 1', details: '3 Beds • 2 Baths • 1500 sqft', price: '₹2,20,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/vita-vilcina-KtOid0FLjqU-unsplas.jpg?updatedAt=1722102898867', alt: 'House 2', details: '4 Beds • 3 Baths • 2000 sqft', price: '₹3,00,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/pexels-harrisonhaines-6292341%20(1).jpg?updatedAt=1722102898637', alt: 'House 3', details: '2 Beds • 1 Bath • 1200 sqft', price: '₹1,80,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/pexels-ahmet-cotur-776571149-190.jpg?updatedAt=1722102898601', alt: 'House 4', details: '5 Beds • 4 Baths • 3000 sqft', price: '₹4,50,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/home.jpeg?updatedAt=1722087843585', alt: 'House 5', details: '3 Beds • 2 Baths • 1800 sqft', price: '₹2,60,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/home.jpeg?updatedAt=1722087843585', alt: 'House 6', details: '4 Beds • 3 Baths • 2200 sqft', price: '₹3,10,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(9).png?updatedAt=1722086536199', alt: 'House 7', details: '2 Beds • 2 Baths • 1400 sqft', price: '₹2,00,00,000' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(7).png?updatedAt=1722086451704', alt: 'House 8', details: '3 Beds • 3 Baths • 1600 sqft', price: '₹2,40,00,000' },

    ];

    const forRentImages = [
        { src: 'https://ik.imagekit.io/rqds6dyata/istockphoto-488120139-612x612.jpg?updatedAt=1722085961645', alt: 'House 9', details: '3 Beds • 2 Baths • 1500 sqft', price: '₹1,50,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/diamond-manor-projects-500x500.webp?updatedAt=1722085831192', alt: 'House 10', details: '4 Beds • 3 Baths • 2000 sqft', price: '₹2,00,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(5).png?updatedAt=1722085653332', alt: 'House 11', details: '2 Beds • 1 Bath • 1200 sqft', price: '₹1,20,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(4).png?updatedAt=1722085492146', alt: 'House 12', details: '5 Beds • 4 Baths • 3000 sqft', price: '₹2,50,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-unsplash.jpg?updatedAt=1722084882490', alt: 'House 13', details: '3 Beds • 2 Baths • 1800 sqft', price: '₹1,80,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1721904965981', alt: 'House 14', details: '4 Beds • 3 Baths • 2200 sqft', price: '₹2,20,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/house-1836070.jpg?updatedAt=1721971607755', alt: 'House 15', details: '2 Beds • 2 Baths • 1400 sqft', price: '₹1,40,000/month' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(27).png?updatedAt=1722176970875', alt: 'House 16', details: '3 Beds • 3 Baths • 1600 sqft', price: '₹1,60,000/month' },

    ];

    const renderImages = (images) => {
        return images.map((image, index) => (
            <div key={index} className="border p-2 rounded-lg shadow-md">
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover mb-2 rounded-t-lg" />
                <div className="p-2">
                    <h3 className="font-bold mb-1">{image.alt}</h3>
                    <p className="text-gray-400">{image.details}</p>
                    <p className="text-red-500 font-bold text-sm">{image.price}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen p-8">
            <div className="flex justify-center items-center mb-4">
                <button 
                    className={`p-2 ${activeTab === 'for-sale' ? 'text-blue-500 font-bold' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('for-sale')}
                >
                    For Sale
                </button>
                <span className="mx-4 text-gray-400">|</span>
                <button 
                    className={`p-2 ${activeTab === 'for-rent' ? 'text-blue-500 font-bold' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('for-rent')}
                >
                    For Rent
                </button>
                <PlusCircle 
                    onClick={() => setOpen(true)} 
                    className="text-blue-500 ml-4 cursor-pointer"
                    size={24}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeTab === 'for-sale' ? renderImages(forSaleImages) : renderImages(forRentImages)}
            </div>

            <Sheet open={open}>
                <SheetContent className="w-full max-w-md mx-auto">
                    <SheetHeader>
                        <SheetTitle>Add Property</SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="imageUrl" className="text-right">Image URL</Label>
                            <Input id="imageUrl" className="col-span-3" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="location" className="text-right">Location</Label>
                            <Input id="location" className="col-span-3" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="ownerName" className="text-right">Owner Name</Label>
                            <Input id="ownerName" className="col-span-3" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="contact" className="text-right">Contact</Label>
                            <Input id="contact" className="col-span-3" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="price" className="text-right">Price</Label>
                            <Input id="price" className="col-span-3" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="squareFt" className="text-right">Square Ft</Label>
                            <Input id="squareFt" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter className='flex flex-col items-center gap-4'>
                        <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" className='w-1/2'>Save changes</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Properties;
