"use client";

import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const jeansSizes = [
  { size: '28', waist: '28"', hip: '36"', inseam: '30"' },
  { size: '30', waist: '30"', hip: '38"', inseam: '30"' },
  { size: '32', waist: '32"', hip: '40"', inseam: '32"' },
  { size: '34', waist: '34"', hip: '42"', inseam: '32"' },
  { size: '36', waist: '36"', hip: '44"', inseam: '32"' },
  { size: '38', waist: '38"', hip: '46"', inseam: '32"' },
];

const tshirtSizes = [
  { size: 'S', chest: '36-38"', length: '27"', shoulder: '17"' },
  { size: 'M', chest: '38-40"', length: '28"', shoulder: '18"' },
  { size: 'L', chest: '40-42"', length: '29"', shoulder: '19"' },
  { size: 'XL', chest: '42-44"', length: '30"', shoulder: '20"' },
  { size: 'XXL', chest: '44-46"', length: '31"', shoulder: '21"' },
];

export default function SizeGuide() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center px-4 md:px-6 lg:px-12 xl:px-16 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Ruler className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Size Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Find your perfect fit with our comprehensive size guide. All measurements are in inches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <Tabs defaultValue="jeans" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="jeans" className="text-lg">Jeans</TabsTrigger>
              <TabsTrigger value="tshirts" className="text-lg">T-Shirts</TabsTrigger>
            </TabsList>

            <TabsContent value="jeans">
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Size</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Waist</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Hip</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Inseam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jeansSizes.map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="px-6 py-4 font-semibold text-accent">{row.size}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.waist}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.hip}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.inseam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold text-primary">How to Measure Jeans</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
                  <li><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
                  <li><strong>Inseam:</strong> Measure from the crotch seam to the bottom of the leg.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="tshirts">
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Size</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Chest</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Length</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-primary">Shoulder</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tshirtSizes.map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="px-6 py-4 font-semibold text-accent">{row.size}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.chest}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.length}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.shoulder}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold text-primary">How to Measure T-Shirts</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li><strong>Chest:</strong> Measure around the fullest part of your chest, under your arms.</li>
                  <li><strong>Length:</strong> Measure from the highest point of the shoulder to the bottom hem.</li>
                  <li><strong>Shoulder:</strong> Measure from one shoulder seam to the other across the back.</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl bg-accent/10 p-8"
        >
          <h3 className="font-display text-xl font-bold text-primary">Pro Tips for the Perfect Fit</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">1</span>
              <span className="text-muted-foreground">Measure yourself wearing lightweight clothes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">2</span>
              <span className="text-muted-foreground">Ask a friend to help for accurate measurements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">3</span>
              <span className="text-muted-foreground">If between sizes, go for the larger one</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">4</span>
              <span className="text-muted-foreground">Keep the measuring tape snug but not tight</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};