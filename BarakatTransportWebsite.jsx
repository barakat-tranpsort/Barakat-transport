import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, Truck } from "lucide-react";

export default function BarakatTransportWebsite() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Barakat Transport Ltd</h1>
        <p className="mt-2 text-lg text-gray-600">Reliable Man & Van Services Across London</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <Truck className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">Home & Office Moves</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fast and professional moving services. Whether it's a single item or a full house, we’ve got you covered.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Truck className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">Furniture & Appliance Delivery</h2>
            <p className="mt-2 text-sm text-gray-600">
              Need something picked up from IKEA or Currys? We deliver quickly and safely with care.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Truck className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold">Rubbish & Clearance Jobs</h2>
            <p className="mt-2 text-sm text-gray-600">
              We help remove old furniture, garden waste, and unwanted items. Affordable and clean.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Barakat?</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          - Affordable hourly rates with no hidden fees<br />
          - Reliable & friendly team<br />
          - Fully insured for transport & goods<br />
          - Same-day service available
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700">Book now or request a quote</p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <Button>
            <PhoneCall className="w-4 h-4 mr-2" /> Call: 07908 965 222
          </Button>
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" /> Email: office.barakatransport@gmail.com
          </Button>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        © 2025 Barakat Transport Ltd. All rights reserved.
      </footer>
    </div>
  );
}