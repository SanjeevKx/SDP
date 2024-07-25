import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-6 bg-primary text-primary-foreground">
        <h1 className="text-3xl font-bold">Welcome to Real Estate Management</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Property</h2>
          <p className="text-xl mb-6">Explore our wide range of properties and expert services.</p>
          <Button size="lg">Get Started</Button>
        </section>

        <section id="featured-properties" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-secondary p-4 rounded-md">Property Management</li>
            <li className="bg-secondary p-4 rounded-md">Real Estate Sales</li>
            <li className="bg-secondary p-4 rounded-md">Investment Consulting</li>
            <li className="bg-secondary p-4 rounded-md">Property Valuation</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;