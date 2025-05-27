using ISCLNNetCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Test
{
    public class OperacionesTest
    {
        [Fact]
        public void TestMethod1()
        {
            int resultadoEsperado = 1;


            Operaciones operaciones = new Operaciones();

            // Act
            var result = operaciones.Suma_Igual_A_1();

            // Assert

            Assert.Equal(resultadoEsperado, result);


        }
    }
}
