using Puerts;
using System;
using System.Collections.Generic;

[Configure]
public class Configure 
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(Scripts)
            };
        }
    }
}