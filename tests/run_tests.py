import sys
import subprocess
import login
from pathlib import Path


def run_k6_test(test_name, test_path):
    """
    Função auxiliar para executar um único teste k6.

    Args:
        test_name (str): O nome amigável do teste para exibição no console.
        test_path (str): O caminho do arquivo de teste k6.
    """
    print(f"Iniciando o teste: {test_name}")
    try:
        k6_command = ["k6", "run", test_path]
        subprocess.run(k6_command, check=True, text=True)
        print("Teste k6 concluído com sucesso!")
    except FileNotFoundError:
        print("Erro: O comando 'k6' não foi encontrado. Certifique-se de que o k6 está instalado e no seu PATH.")
        sys.exit(1)
    except subprocess.CalledProcessError as e:
        print(f"Erro ao executar o teste k6: {e}")
        sys.exit(e.returncode)


if __name__ == "__main__":
    login.main()
    print("Login concluído com sucesso.")

    tests_to_run = [
        ("PDF de Inscritos", "reports/PdfDeInscritos.js"),
        ("Excel de Check-in de Inscritos", "reports/ExcelCheckInInscritos.js"),
        ("Excel de Companhias Ativas", "reports/ExcelCompanhiasAtivas.js"),
        ("Excel de Inscritos", "reports/ExcelDeInscritos.js"),
        ("Excel de Pagamento de Inscritos", "reports/ExcelPagamentoInscritos.js"),
        ("PDF de Comprovante de Inscrito", "reports/PdfComprovanteInscrito.js"),
    ]

    for test_name, test_path in tests_to_run:
        run_k6_test(test_name, test_path)

    print("\nTodos os testes foram concluídos.")