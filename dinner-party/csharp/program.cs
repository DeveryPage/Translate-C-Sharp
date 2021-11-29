using System;
using System.Collections.Generic;

// List<Guest> getGuests()
public static List<Guest> getGuests()
{
    Guest.add("Marilyn Monroe", "entertainer", "(1926 - 1962) American actress, singer, model");
    Guest.add("Abraham Lincoln", "politician", "(1809 - 1865) US President during American civil war");
    Guest.add("Martin Luther King", "activist", "(1929 - 1968)  American civil rights campaigner");
    Guest.add("Rosa Parks", "activist", "(1913 - 2005)  American civil rights activist");
    Guest.add("Peter Sellers", "entertainer", "(1925 - 1980) British actor and comedian");
    Guest.add("Alan Turing", "computer scientist", "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world");
    Guest.add("Admiral Grace Hopper", "computer scientist", "(1913 - 2005)  American civil rights activist");
    Guest.add("Indira Gandhi", "politician", "(1917 - 1984) Prime Minister of India 1966 - 1977");
}


public class Guest
{
    public string Name { get; set; }
    public string Occupation { get; set; }
    public string bio { get; set; }

    public Guest(string Name, string Occupation, string bio)
    {
        this.Name = Name;
        this.Occupation = Occupation;
        this.bio = bio;
    }
}

public class Table
{
    public string tables
}





foreach (Guest guest in guests)
{
    Table table1Occupations = tables["Table 1"].map(global => global.occupation);

}
