import { exec } from "node:child_process";

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\nConeccao com o banco realizada com sucesso!");
  }
}

process.stdout.write("Aguardando banco postgres aceitar se conectar");
checkPostgres();
