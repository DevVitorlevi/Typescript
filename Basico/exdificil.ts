type StatusTarefa = "Pendente" | "Em Andamento" | "Concluida";
type Prioridade = "Baixa" | "Media" | "Alta";

type Tarefa = {
    readonly id: number;
    name: string;
    status: StatusTarefa;
    prioridade: Prioridade;
};

const Tarefas: Tarefa[] = [
    { id: 1, name: 'Limpar Casa', status: 'Em Andamento', prioridade: "Baixa" },
    { id: 2, name: 'Estudar TS', status: "Concluida", prioridade: "Alta" },
    { id: 3, name: 'Treinar Lógica', status: 'Em Andamento', prioridade: "Alta" },
    { id: 4, name: 'Arrumar quarto', status: 'Pendente', prioridade: "Media" },
    { id: 5, name: 'Ler um livro', status: 'Em Andamento', prioridade: "Media" },
];

// Tipo da função que recebe uma lista de tarefas e um status
type FiltrarTarefas = (tarefas: Tarefa[], status: StatusTarefa) => Tarefa[];

const filtrarTarefa: FiltrarTarefas = (tarefas, status) => {
    return tarefas
        .filter((item) => item.status === status) // filtra pelo status
};

// Teste da função com status "Em Andamento"
console.log(filtrarTarefa(Tarefas, "Em Andamento"))
