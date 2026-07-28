Fix the layout clipping and overflow issues in `Experience.tsx` so the 2x2 grid fits perfectly inside the viewport without overlapping the footer or causing scrollbars.

### CRITICAL LAYOUT FIXES

1. **Main Layout Container:**
   - Parent Page Structure:
     `min-h-screen flex flex-col justify-between overflow-hidden bg-slate-50`
   - Experience Container:
     `flex-1 max-w-7xl w-full mx-auto px-6 py-2 flex flex-col justify-between overflow-hidden`
   - This ensures the section stays strictly bounded between the top Navbar and the bottom Footer.

2. **Compact 2x2 Grid (`flex-1 grid grid-cols-2 grid-rows-2 gap-3 my-1 overflow-hidden`):**
   - Reduce card padding to `p-2.5 sm:p-3` (was `p-4`) to save vertical pixels.
   - Tighten text line heights (`leading-tight`) and spacing (`space-y-1.5`).
   - Limit `Challenge` text to `line-clamp-1` or `line-clamp-2` maximum (`text-[10px]` or `text-[11px]`).
   - Shrink metric pills (`text-[9px]` or `text-[10px]`, `py-0.5 px-1.5`).
   - Image Width: Set left image column to fixed width `w-[30%]` or `w-[32%]` with `h-full object-cover`.

---

### CORRECTED PEXELS IMAGE CONFIGURATION

Replace the image queries/fallbacks so GVT shows an industrial CNC factory rather than a medical image:

1. **Grand Venture Technology (GVT):**
   - Search Query: `cnc machine precision manufacturing factory`
   - Fallback Image: `https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800`
2. **OJJ Foods:**
   - Fallback Image: `https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800`
3. **Wong Fong Engineering:**
   - Fallback Image: `https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=800`
4. **PT Kobexindo Tractors Tbk:**
   - Fallback Image: `https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800`

---

### COMPACT CARD JSX REFERENCE CODE

```tsx
<div className="flex flex-row border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm hover:border-slate-300 transition-all h-full">
  {/* Left Image Column */}
  <div className="relative w-[30%] shrink-0 bg-slate-900">
    <img src={imageUrl} alt={companyName} className="w-full h-full object-cover opacity-90" />
    <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[9px] px-1.5 py-0.5 rounded font-medium truncate max-w-[90%]">
      {category}
    </span>
  </div>

  {/* Right Details Column */}
  <div className="w-[70%] p-2.5 sm:p-3 flex flex-col justify-between space-y-1">
    <div>
      <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">{companyName}</h3>
      <p className="text-[10px] text-slate-500 font-medium truncate">{subtitle}</p>
    </div>

    <div className="text-[10px] text-slate-600 space-y-0.5">
      <p className="line-clamp-1"><strong className="text-slate-800">Challenge:</strong> {challenge}</p>
      <p className="line-clamp-1"><strong className="text-slate-800">Approach:</strong> {approach}</p>
    </div>

    {/* Metric Micro Pills */}
    <div className="flex flex-wrap gap-1 pt-0.5">
      {kpis.map(kpi => (
        <span key={kpi} className="bg-sky-50 text-sky-700 border border-sky-100 text-[9px] font-semibold px-1.5 py-0.5 rounded">
          {kpi}
        </span>
      ))}
    </div>

    {/* Tech Badges */}
    <div className="flex flex-wrap gap-1 border-t border-slate-100 pt-1">
      {tags.map(tag => (
        <span key={tag} className="bg-slate-100 text-slate-500 text-[8px] px-1 py-0.5 rounded">
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>