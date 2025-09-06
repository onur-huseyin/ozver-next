"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Loader2 } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isChanging, setIsChanging] = useState(false);

  const languages = [
    { value: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { value: 'en', label: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  const handleLanguageChange = async (value: string) => {
    setIsChanging(true);
    // Kısa bir delay ekleyerek loading state'i gösterebiliriz
    await new Promise(resolve => setTimeout(resolve, 300));
    setLanguage(value as 'tr' | 'en');
    setIsChanging(false);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange} disabled={isChanging}>
      <SelectTrigger className="w-[120px] bg-transparent border-[#262727] dark:border-[#262727] text-gray-700 dark:text-gray-300 cursor-pointer disabled:opacity-70">
        <div className="flex items-center space-x-2 w-full">
          {isChanging ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Globe className="w-4 h-4" />
          )}
          <span>{currentLanguage?.label}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <div className="flex items-center space-x-2">
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
